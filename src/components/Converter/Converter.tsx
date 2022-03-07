import { useMemo } from 'react';
import styles from './converter.module.scss';
import { DiContainer } from 'src/di';
import { IConverterStore } from './ConverterStore';
import { ConverterViewModel } from './ConverterViewModel';
import { ConverterRowView } from './ConverterView';
import { observer } from 'mobx-react';


export const Converter: React.FC = observer(() => {
  const converterStore = DiContainer.get(IConverterStore);
  const viewModel = useMemo(() => new ConverterViewModel(converterStore), [converterStore]);


  function onChangeCurrency1(event: any) {
    viewModel.selectedCurrency1(event.target.value)
  }

  function onChangeCurrency2(event: any) {
    viewModel.selectedCurrency2(event.target.value)
  }

  function onChangeInput1(event: any) {
    viewModel.getInputTo(event.target.value)
  }

  function onChangeInput2(event: any) {
    viewModel.getInputFrom(event.target.value)
  }



  return (
    
    <div className={styles.converter}>
      <h3 className={styles.header}>Конвертер валют</h3>

      <div className={styles.dropdownСontainer1}>
      <ConverterRowView
      currencyOptions={viewModel.currencyOptions}
      selectedCurrency={viewModel.selectedCurrencyFrom}
      onChangeCurrency={onChangeCurrency1}
      onChangeAmount={onChangeInput1}
      result={viewModel.input1}
    /></div>

<div className={styles.dropdownСontainer2}>
<ConverterRowView
      currencyOptions={viewModel.currencyOptions}
      selectedCurrency={viewModel.selectedCurrencyTo}
      onChangeCurrency={onChangeCurrency2}
      onChangeAmount={onChangeInput2}
      result={viewModel.result2}
    /></div>
    </div>
  )})

