import styles from './Select.module.css'

function Select({text, name, options, placeholder,handleOnChange, value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option>Selecione uma opcao</option>
            </select>

        </div>

    )
}
export default Select