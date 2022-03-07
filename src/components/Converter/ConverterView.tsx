import styles from './converter.module.scss'

interface Props {
  currencyOptions: string[]
  selectedCurrency: any;
  onChangeCurrency: any;
  onChangeAmount: any;
  result: any;
}


export const ConverterRowView: React.FC<Props> = (props) => {
  return (
        <>
          <select value={props.selectedCurrency} onChange={props.onChangeCurrency} className={styles.dropdown}>
            {props.currencyOptions.map(option => <option key={option} value={option}>{option}</option>)}
          </select>
          <input value={props.result} onChange={props.onChangeAmount} className={styles.input} type='number' />
        </>
  )}
