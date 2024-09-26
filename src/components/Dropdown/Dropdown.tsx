"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "./Dropdown.module.css";

interface DropdownOption<T> {
  value: T;
  label: string;
}

interface DropdownProps<T> {
  options: DropdownOption<T>[];
  defaultValue?: T;
  onChange?: (selectedValue: T) => void;
  placeholder?: string;
}

export const Dropdown = <T,>({
  onChange,
  options,
  defaultValue,
  placeholder,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] =
    useState<DropdownOption<T> | null>(
      options.find((option) => option.value === defaultValue) || null
    );
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<(HTMLLIElement | null)[]>([]);

  const setOptionRef = useCallback(
    (el: HTMLLIElement | null, index: number) => {
      optionsRef.current[index] = el;
    },
    []
  );

  const toggleDropdown = (): void => setIsOpen(!isOpen);

  const handleOptionClick = (
    option: DropdownOption<T>,
    index: number
  ): void => {
    setSelectedOption(option);
    setIsOpen(false);
    setActiveIndex(index);
    onChange?.(option.value);
  };

  const handleOpenDropdown = (): void => {
    setIsOpen(true);
    setActiveIndex(0);
  };

  const handleCloseDropdown = (): void => {
    setIsOpen(false);
  };

  const handleArrowNavigation = (direction: "up" | "down"): void => {
    setActiveIndex((prevIndex) => {
      if (direction === "up") {
        return prevIndex > 0 ? prevIndex - 1 : options.length - 1;
      } else {
        return prevIndex < options.length - 1 ? prevIndex + 1 : 0;
      }
    });
  };

  const handleOptionSelection = (): void => {
    if (activeIndex !== -1) {
      handleOptionClick(options[activeIndex], activeIndex);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (!isOpen) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        handleOpenDropdown();
        e.preventDefault();
      }
    } else {
      switch (e.key) {
        case "Escape":
          handleCloseDropdown();
          break;
        case "ArrowUp":
          handleArrowNavigation("up");
          e.preventDefault();
          break;
        case "ArrowDown":
          handleArrowNavigation("down");
          e.preventDefault();
          break;
        case "Enter":
        case " ":
          handleOptionSelection();
          e.preventDefault();
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (isOpen && activeIndex !== -1) {
      optionsRef.current[activeIndex]?.focus();
    }
  }, [isOpen, activeIndex]);

  return (
    <div
      className={styles.dropdown}
      ref={dropdownRef}
      onKeyDown={handleKeyDown}
    >
      <button
        className={styles.dropdownHeader}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="dropdown-label"
      >
        <span id="dropdown-label" className={styles.visuallyHidden}>
          {placeholder}
        </span>
        {selectedOption ? selectedOption.label : placeholder}
        <span className={styles.arrow} aria-hidden="true">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>
      {isOpen && (
        <ul
          className={styles.dropdownList}
          role="listbox"
          aria-labelledby="dropdown-label"
          tabIndex={-1}
        >
          {options.map((option, index) => (
            <li
              key={index}
              ref={(el) => setOptionRef(el, index)}
              className={styles.option}
              onClick={() => handleOptionClick(option, index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleOptionClick(option, index);
                }
              }}
              role="option"
              aria-selected={option === selectedOption}
              tabIndex={0}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
