import React from 'react'
import styles from './Formscontrol.module.css'

export const Input = ({input, meta, type, label, ...props}) => {
    let hasError=meta.touched && meta.error;
    return (
        <div className={styles.content}>
            <div>
                <input className={hasError ? styles.errorInput : ''} {...input} type={type} {...props}/>
                <label>{label}</label>
            </div>
            <div className={styles.error}>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>

    )
};export const Select = ({input, meta, label, ...props}) => {
    let hasError=meta.touched && meta.error;
    return (
        <div className={styles.content}>
            <div>
                <select className={hasError ? styles.errorInput : ''} {...input} {...props}/>
                <label>{label}</label>
            </div>
            <div className={styles.error}>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>

    )
};