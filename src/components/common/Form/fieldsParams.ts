type ValidationFunction = (value: string) => boolean | string;
import data from '@/data/form.json';

const fieldsParams: {
  [key: string]: {
    required?: string;
    minLength?: {
      value: number;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };
    validate?: { noText: ValidationFunction };
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
} = {
  firstname: {
    validate: {
      noText: (value: string) =>
        !!value.match(/^(?!\s*$).+/) || data.messages.validation.name.empty,
    },
    pattern: {
      value: /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-\s]+$/,
      message: data.messages.validation.name.reg,
    },
    required: data.messages.validation.name.required,
    minLength: {
      value: 2,
      message: data.messages.validation.name.min,
    },
    maxLength: {
      value: 70,
      message: data.messages.validation.name.max,
    },
  },

  lastname: {
    validate: {
      noText: (value: string) =>
        !!value.match(/^(?!\s*$).+/) || data.messages.validation.lastname.empty,
    },
    pattern: {
      value: /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-\s]+$/,
      message: data.messages.validation.lastname.reg,
    },
    required: data.messages.validation.lastname.required,
    minLength: {
      value: 2,
      message: data.messages.validation.lastname.min,
    },
    maxLength: {
      value: 70,
      message: data.messages.validation.lastname.max,
    },
  },
  phone: {
    required: data.messages.validation.phone.required,
    pattern: {
      value: /^(\+380)\d{9}$/,
      message: data.messages.validation.phone.reg,
    },

    maxLength: {
      value: 13,
      message: data.messages.validation.phone.max,
    },
    validate: {
      noText: (value: string) =>
        !!value.match(/^(?!\s*$).+/) || data.messages.validation.phone.empty,
    },
  },
  postname: {
    required: data.messages.validation.postname.required,

    validate: {
      noText: (value: string) =>
        !!value.match(/^(?!\s*$).+/) || data.messages.validation.phone.empty,
    },
  },
  city: {
    validate: {
      noText: (value: string) =>
        !!value.match(/^(?!\s*$).+/) || data.messages.validation.name.empty,
    },
    pattern: {
      value: /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-\s]+$/,
      message: data.messages.validation.name.reg,
    },
    required: data.messages.validation.name.required,
    minLength: {
      value: 2,
      message: data.messages.validation.name.min,
    },
    maxLength: {
      value: 70,
      message: data.messages.validation.name.max,
    },
  },
  office: {
    validate: {
      noText: (value: string) =>
        !!value.match(/^(?!\s*$).+/) || data.messages.validation.office.empty,
    },
    pattern: {
      value: /^\d+$/,
      message: data.messages.validation.office.reg,
    },
    required: data.messages.validation.office.required,
    minLength: {
      value: 1,
      message: data.messages.validation.office.min,
    },
    maxLength: {
      value: 70,
      message: data.messages.validation.office.max,
    },
  },
};

export default fieldsParams;
