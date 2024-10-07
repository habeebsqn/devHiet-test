import { Flex } from "@chakra-ui/react";
import { Formik } from "formik";
import { forwardRef } from "react";

type Props = {
  children: any;
  initialValues: Object;
  onSubmit: any;
  validateSchema: any;
};

const AppForm = forwardRef<any, Props>(
  ({ children, initialValues, onSubmit, validateSchema }: Props, ref) => {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validateSchema}
        innerRef={ref}
      >
        {() => (
          <Flex flexDirection={"column"} gap={"2vh"}>
            {children}
          </Flex>
        )}
      </Formik>
    );
  }
);

export default AppForm;
