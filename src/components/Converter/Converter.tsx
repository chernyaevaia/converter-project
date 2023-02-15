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

  return (
    <div className={styles.converter}>
      <h3 className={styles.header}>Конвертер валют</h3>

      <div className={styles.dropdownСontainer1}>
        <ConverterRowView
          currencyOptions={viewModel.currencyOptions}
          selectedCurrency={viewModel.selectedCurrencyFrom}
          onChangeCurrency={viewModel.selectedCurrency1}
          onChangeAmount={viewModel.getInputTo}
          result={viewModel.result1}
        />
      </div>

      <div className={styles.dropdownСontainer2}>
        <ConverterRowView
          currencyOptions={viewModel.currencyOptions}
          selectedCurrency={viewModel.selectedCurrencyTo}
          onChangeCurrency={viewModel.selectedCurrency2}
          onChangeAmount={viewModel.getInputFrom}
          result={viewModel.result2}
        />
      </div>
    </div>
  );
});
