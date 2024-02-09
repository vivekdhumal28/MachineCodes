import React, { useState } from "react";

const DynamicForms = () => {
  const [formFields, setFormFields] = useState([{ name: "", age: "" }]);

  const handleFormChange = (e, index) => {
    let data = [...formFields];
    data[index][e.target.name] = e.target.value;
    // console.log(index, e.target.name);
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };

  const addFields = () => {
    let object = {
      name: "",
      age: "",
    };
    setFormFields([...formFields, object]);
  };

  const RemoveFields = (index) => {
    let remove = [...formFields];
    remove.splice(index, 1);
    setFormFields(remove);
  };
  return (
    <>
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name="name"
                placeholder="Name"
                onChange={(e) => handleFormChange(e, index)}
                value={form.name}
              />
              <input
                name="age"
                placeholder="Age"
                onChange={(e) => handleFormChange(e, index)}
                value={form.age}
              />
              <button onClick={() => RemoveFields(index)}>Remove</button>
            </div>
          );
        })}
      </form>
      <button onClick={addFields}>Add More</button>
      <button onClick={(e) => submit(e)}>Submit</button>
    </>
  );
};

export default DynamicForms;
