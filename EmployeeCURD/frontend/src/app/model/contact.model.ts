import { FormlyFieldConfig } from "@ngx-formly/core";

export class Contact{
    name!: string;
    phoneNumber!: string;
    email!: string;

    formFields(){
        return <FormlyFieldConfig[]>[{
            key: 'name',
            type: 'input',
            templateOptions: {
              type: 'text',
              label: 'Name',
              placeholder: 'Name',
              required: true
            },
            validation: {
                messages: {
                    required: 'You need to provide a name! '
                }
            }
    
          },
          {
            key: 'position',
            type: 'input',
            templateOptions: {
              type: 'text',
              label: 'Position',
              placeholder: 'Enter Your Position',
              required: true
            },
            validation: {
                messages: {
                    required: 'You need to provide a Your Position! '
                }
            }
    
          },
          {
            key: 'salary',
            type: 'input',
            templateOptions: {
              type: 'text',
              label: 'Salary',
              placeholder: 'Enter Salary',
              required: true
            },
            validation: {
                messages: {
                    required: 'You need to provide a your Salary '
                }
            }
    
          },
        
        ];
    }

}