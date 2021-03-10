import style from "./FormsControls.module.css";

export const Textarea = ({input, meta: {touched, error}, ...props}) => {
    const hasError = error && touched;
    return (
        <div className={style.formControlsTextarea + ' ' + (hasError ? style.error : '')}>
            <div>
                <textarea {...input} {...props} className={style.fieldSizeTextarea}/>
            </div>
            { hasError && <span className={style.error}>{error}</span>}
        </div>
    );
}

export const Input = ({input, meta: {touched, error}, ...props}) => {
    const hasError = error && touched;
    return (
        <div>
            <div className={style.formControlsInput + ' ' + (hasError ? style.error : '')}>
                <input {...input} {...props} className={style.fieldInput}/>
            </div>
            { hasError && <span className={style.error}>{error}</span>}
        </div>
    );
}