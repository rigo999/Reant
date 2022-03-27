import React, { FC, useState, useRef, useEffect, createContext, FunctionComponentElement } from "react";
import classNames from "classnames";
import useClickOutside from "../../hooks/useClickOutside";
import Transition from "../Transition/transition";
import Input from "../Input/input";
import Icon from "../Icon/icon";
import { SelectOptionProps } from "./option";

export interface SelectProps {
    /** 指定默认选中的条目, 可以是是字符串或者字符串数组 */
    defaultValue?: string | string[];
    /** 选择框默认文字 */
    placeholder?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否支持多选 */
    multiple?: boolean;
    /** select input 的 name 属性 */
    name?: string;
    /** 选中值发生变化时触发 */
    onChange?: (selectedValue: string, selectedValues: string[]) => void;
    /** 下拉框出现/隐藏时触发 */
    onVisibleChange?: (visible: boolean) => void;
}

export interface SelectContext {
    onSelect ?: (value: string, isSelected ?: boolean) => void;
    selectedValue: string[];
    multiple ?: boolean;
}

export const SelectContext = createContext<SelectContext>({ selectedValue: []})

/**
 * 下拉选择器。
 * 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
 * ### 引用方法
 *
 * ~~~js
 * import { Select } from 'reantship'
 * // 然后可以使用 <Select> 和 <Select.Option>
 * ~~~
 */

export const Select:FC<SelectProps> = (props) => {

    const {
        defaultValue,
        placeholder,
        children,
        multiple,
        name,
        disabled,
        onChange,
        onVisibleChange,
    }= props

    const input = useRef<HTMLInputElement>(null)
    const containerRef = useRef<HTMLInputElement>(null)
    const containerWidth = useRef(0)
    const [ selectedValue, setSelectedValue ] = useState<string[]>(Array.isArray(defaultValue)? defaultValue :[])
    const [ menuOpen, setOpen ] = useState(false)
    const [ value, setValue ] = useState(typeof defaultValue === 'string' ? defaultValue : '')
    useEffect(() => {
        // focus input
        if(input.current) {
            input.current.focus()
            if(multiple && selectedValue.length > 0) {
                input.current.placeholder = ''
            } else {
                if(placeholder) input.current.placeholder = placeholder
            }
        }
    }, [selectedValue, multiple, placeholder])
    useEffect(() => {
        if(containerRef.current) {
            containerWidth.current = containerRef.current.getBoundingClientRect().width
        }
    })
    useClickOutside(containerRef, () => {
            setOpen(false)
        if(onVisibleChange && menuOpen) {
            onVisibleChange(false)
        }
    })

    const handleOptionClick = (value: string, isSelected?: boolean) => {
        // update value
        if(!multiple) {
            setOpen(false)
            setValue(value)
            if(onVisibleChange) {
                onVisibleChange(false)
            }
        } else {
            setValue('')
        }
        let updatedValues = [value]
        // click again to remove selected when is multiple mode
        if(multiple) {
            updatedValues = isSelected ? selectedValue.filter((v) => v !== value) :  [...selectedValue, value]
            setSelectedValue(updatedValues)
        }
        if(onChange) {
            onChange(value, updatedValues)
        }
    }

    const passedContext: SelectContext = {
        onSelect: handleOptionClick,
        selectedValue: selectedValue,
        multiple: multiple,
    }

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        if(!disabled) {
            setOpen(!menuOpen)
            if(onVisibleChange) {
                onVisibleChange(!menuOpen)
            }
        }
    }

    const generateOptions = () => {
        return React.Children.map(children, (child, i) => {
            const childElement = child as FunctionComponentElement<SelectOptionProps>
            if(childElement.type.displayName === 'Option') {
                return React.cloneElement(childElement, {
                    index: `select-${i}`
                })
            } else {
                console.error("Warning: Select has a child which is not a Option component")
            }
        })
    }

    const containerClass = classNames('reant-select', {
        'menu-is-open': menuOpen,
        'is-disabled': disabled,
        'is-multiple': multiple,
    })

    return (
        <div
            className={containerClass}
            ref={containerRef}
        >
            <div
                className="reant-select-input"
                onClick={handleClick}
            >
                <Input
                    ref={input}
                    placeholder={placeholder}
                    value={value}
                    readOnly
                    icon="angle-down"
                    disabled={disabled}
                    name={name}
                />
            </div>
            <SelectContext.Provider value={passedContext}>
                <Transition
                    in={menuOpen}
                    animation="zoom-in-top"
                    timeout={300}
                >
                    <ul className="reant-select-dropdown">
                        {generateOptions()}
                    </ul>
                </Transition>
            </SelectContext.Provider>
            {multiple &&
                <div
                    className="reant-selected-tags"
                    style={{maxWidth: containerWidth.current - 32}}
                >
                    {
                        selectedValue.map((value, index) => {
                            return (
                                <span
                                    className="reant-tag"
                                    key={`tag-${index}`}
                                >
                                    {value}
                                    <Icon
                                        icon="times"
                                        onClick={() => {handleOptionClick(value, true)}}
                                    />
                                </span>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

Select.defaultProps = {
    name: 'reant-select',
    placeholder: '请选择'
}

export default Select;