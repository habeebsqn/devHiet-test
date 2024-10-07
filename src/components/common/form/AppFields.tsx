import {
  FormControl,
  Input,
  Select,
  Textarea,
  TextareaProps,
  InputProps,
  SelectProps,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { useFormikContext } from "formik";

type FormikProps = {
  errors: any;
  touched: any;
  values: any;
};

type FormControlProps = {
  name: string;
  children: any;
};

type TextProps = InputProps & {
  name: string;
};

type TextAreaProps = TextareaProps & {
  name: string;
};

type SelectInputProps = SelectProps & {
  name: string;
  options: {
    value: string;
    label: string;
  }[];
  handleSelectProduct?: () => void;
};

type MultiSelectProps = {
  name: string;
  options: {
    name: string;
    icon: any;
  }[];
};

const AppFormFields = <T extends FormControlProps>({
  children,
  name,
  ...others
}: T) => {
  const { errors }: FormikProps = useFormikContext();
  const error = errors[name];
  return (
    <FormControl {...others} isInvalid={error}>
      {children}
    </FormControl>
  );
};

const textInput = <T extends TextProps>({ name, ...others }: T) => {
  const { setFieldTouched, setFieldValue } = useFormikContext();
  const { errors, values }: FormikProps = useFormikContext();
  const inputValue = name ? values[name] : "";
  const error = errors[name];

  const handleOnChange = (e: any) => {
    const text = e.target.value;
    setFieldValue(name, text);
  };

  return (
    <Input
      onBlur={() => {
        setFieldTouched(name);
      }}
      onChange={handleOnChange}
      {...others}
      isInvalid={error}
      variant="outline"
      borderColor={"#9D9D9D"}
      value={inputValue}
      size={"md"}
    />
  );
};

const selectionInput = <T extends SelectInputProps>({
  name,
  options,
  handleSelectProduct,
  ...others
}: T) => {
  const { setFieldTouched, setFieldValue } = useFormikContext();
  const { errors, values }: FormikProps = useFormikContext();
  const inputValue = name ? values[name] : "";
  const error = errors[name];
  const selection = (e: any) => {
    if (e.target.value !== "") setFieldValue(name, e.target.value);
  };
  return (
    <Select
      variant="outline"
      borderColor={"#9D9D9D"}
      onChange={selection}
      onBlur={() => setFieldTouched(name)}
      {...others}
      value={inputValue}
      isInvalid={error}
    >
      {options?.map((opt: any, i: number) => (
        <option key={i} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </Select>
  );
};

const textAreaInput = <T extends TextAreaProps>({ name, ...others }: T) => {
  const { setFieldTouched, setFieldValue } = useFormikContext();
  const { errors, values }: FormikProps = useFormikContext();
  const inputValue = name ? values[name] : "";
  const error = errors[name];

  const handleOnChange = (e: any) => {
    const text = e.target.value;
    setFieldValue(name, text);
  };

  return (
    <Textarea
      onBlur={() => {
        setFieldTouched(name);
      }}
      onChange={handleOnChange}
      {...others}
      isInvalid={error}
      variant="outline"
      borderColor={"#9D9D9D"}
      value={inputValue}
    />
  );
};

const multiSelectInput = <T extends MultiSelectProps>({
  name,
  options,
  ...others
}: T) => {
  const { setFieldTouched, setFieldValue } = useFormikContext();
  const { errors, values }: FormikProps = useFormikContext();
  const multiSelectValues = name ? values[name] : "";
  const error = errors[name];

  const handleSelect = (platform: string) => {
    const multiSelectValuesCopy = [...multiSelectValues];
    const updatedPlatforms = multiSelectValues.includes(platform)
      ? multiSelectValuesCopy.filter((name) => name !== platform)
      : [...multiSelectValuesCopy, platform];

    setFieldValue(name, updatedPlatforms);
  };

  return (
    <HStack gap={3}>
      {options?.map((option) => (
        <IconButton
          onBlur={() => {
            setFieldTouched(name);
          }}
          variant={
            multiSelectValues.includes(option.name) ? "solid" : "outline"
          }
          colorScheme={
            multiSelectValues.includes(option.name) ? "blue" : "gray"
          }
          borderColor={error && "red"}
          key={option.name}
          aria-label={option.name}
          icon={<option.icon />}
          onClick={() => handleSelect(option.name)}
          {...others}
        />
      ))}
    </HStack>
  );
};

AppFormFields.Input = textInput;
AppFormFields.SelectionInput = selectionInput;
AppFormFields.textAreaInput = textAreaInput;
AppFormFields.multiSelect = multiSelectInput;

export default AppFormFields;
