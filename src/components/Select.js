import { Select, Space } from 'antd';
const CategorySelector = ({selectedCategories,setSelectedCategories,categoryOptions}) => {
  const options = categoryOptions.map((category)=>{
    return {
      label : category,
      value : category
    }
  });
  const handleChange = value => {
    setSelectedCategories(value);
  };
  return (
    <Space style={{ width: '100%' }} direction="vertical">
      <Select
        mode="multiple"
        allowClear
        style={{ width: '100%' }}
        placeholder="Please select"
        defaultValue={selectedCategories}
        onChange={handleChange}
        options={options}
      />
    </Space>
  )
}

export default CategorySelector;