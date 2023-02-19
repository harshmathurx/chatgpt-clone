import Select from 'react-select';
import useSWR from 'swr';

const fetchModels = async () => fetch("/api/getEngines").then((res) => res.json())

const ModelSelection = () => {

  const {data: models,isLoading} = useSWR('models',fetchModels);
  const {data: model,mutate: setModel} = useSWR('model',{
    fallbackData: 'text-davinci-002'
  });

  return (
    <Select className='mt-2'
    defaultValue={model}
    isSearchable
    isLoading={isLoading}
    classNames={
      {
        control: (state) => "bg-[#434654] border-[#434654]",
      }
    }
    placeholder={model}
    options={models?.modelOptions}
    menuPosition='fixed'
    onChange={(e) => setModel(e.value)} />
  )
}
export default ModelSelection