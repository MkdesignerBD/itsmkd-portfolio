import { useEffect, useMemo, useRef, useState } from "react";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BrandedSelect({
  value,
  onChange,
  options,
  placeholder = "Select an option",
  required = false,
  name,
}) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);

  const selected = useMemo(
    () => options.find((o) => o.value === value) || null,
    [options, value],
  );

  useEffect(() => {
    function onDocMouseDown(e) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    // When opened, set active to selected or first option
    const idx = Math.max(
      0,
      options.findIndex((o) => o.value === value),
    );
    setActiveIndex(idx);
  }, [open, options, value]);

  function selectOption(opt) {
    onChange?.(opt.value);
    setOpen(false);
    buttonRef.current?.focus();
  }

  function onKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen((p) => !p);
      return;
    }
    if (e.key === "Escape") {
      setOpen(false);
      return;
    }
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setOpen(true);
      return;
    }
    if (!open) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(options.length - 1, i + 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, i - 1));
    }
    if (e.key === "Enter") {
      e.preventDefault();
      const opt = options[activeIndex];
      if (opt) selectOption(opt);
    }
  }

  // Hidden input so your form still has a "required" field value

  return (
    <div ref={rootRef} className="relative">
      <input
        type="hidden"
        name={name}
        value={value || ""}
        required={required}
      />

      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((p) => !p)}
        onKeyDown={onKeyDown}
        className={cx(
          "w-full h-[56px] rounded-xl border bg-transparent px-5 pr-12 text-[16px] text-black",
          "outline-none focus:outline-none transition-colors",
          "border-black/35 hover:border-black/60",
        )}
      >
        <span
          className={cx(
            "block text-left",
            selected ? "text-black" : "text-black/35",
          )}
        >
          {selected ? selected.label : placeholder}
        </span>

        {/* Chevron */}
        <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-black/70">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-black/20 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
        >
          <div className="max-h-[260px] overflow-auto py-1">
            {options.map((opt, idx) => {
              const isActive = idx === activeIndex;
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => selectOption(opt)}
                  className={cx(
                    "w-full px-4 py-3 text-left text-[16px] transition-colors",
                    isActive
                      ? "bg-[#f15a28] text-white"
                      : "bg-white text-black",
                    !isActive && "hover:bg-[#f15a28] hover:text-white",
                  )}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
