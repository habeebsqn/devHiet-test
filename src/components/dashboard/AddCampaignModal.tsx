import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormLabel,
  Flex,
} from "@chakra-ui/react";
import { memo } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { dataSliceAction } from "../../store/dataSlice";

import AppForm from "../common/form/AppForm";
import AppFormFields from "../common/form/AppFields";
import AppFormSubmitBtn from "../common/form/AppFormSubmitBtn";

import { campaignCat } from "../../constants/campaignCategory";
import { platforms } from "../../constants/platformOptions";

interface DataState {
  data: any;
}

const AddCampaignModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const dispatch = useDispatch();
  const { campaigns } = useSelector((state: DataState) => state.data);

  const initialValues = {
    title: "",
    brand: "",
    category: "",
    description: "",
    channels: [],
    minBudget: "",
    maxBudget: "",
  };

  const schema = Yup.object({
    title: Yup.string().required("Required").label("title"),
    brand: Yup.string().required("Required").label("brand"),
    category: Yup.string().required("Required").label("category"),
    description: Yup.string().required("Required").label("description"),
    channels: Yup.array()
      .of(Yup.string())
      .min(1, "At least one platform must be selected")
      .max(5, "You can select up to 5 platforms")
      .required("Required"),
    minBudget: Yup.string().required("Required").label("minBudget Status"),
    maxBudget: Yup.string().required("Required").label("banker"),
  });

  const handleAddCampaign = (values: any) => {
    const id: number = campaigns.length + 1;
    const startDate = new Date().toISOString();
    const status = "active";
    const min = values.minBudget;
    const max = values.maxBudget;
    delete values.minBudget;
    delete values.maxBudget;

    const newCampaign = {
      id,
      startDate,
      status,
      budget: {
        min,
        max,
      },
      ...values,
    };

    console.log(newCampaign, "new");

    dispatch(dataSliceAction.onAddCampaign(newCampaign));
    onClose();
  };
  return (
    <Modal
      blockScrollOnMount={true}
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior={"inside"}
    >
      <ModalOverlay
        backdropBlur={"3xl"}
        bgColor={"transparent"}
        backdropFilter={"blur(5px)"}
      />
      <ModalContent minW={{ base: "95%", lg: "35vw" }}>
        <ModalHeader color={"#053559"} fontSize={"sm"}>
          Creat Campaign
        </ModalHeader>
        <ModalBody py={"2vh"}>
          <ModalCloseButton />
          <AppForm
            initialValues={initialValues}
            onSubmit={handleAddCampaign}
            validateSchema={schema}
          >
            {/*  title */}
            <AppFormFields name="title" isRequired={true}>
              <FormLabel
                htmlFor="title"
                as="legend"
                fontSize={"xs"}
                color={"#053559"}
              >
                Campaign Title
              </FormLabel>
              <AppFormFields.Input
                type="text"
                name="title"
                placeholder="Enter your campaign title here"
              />
              {/* <AppFormFields.ErrorMessage name="firstname" /> */}
            </AppFormFields>
            {/*  title */}

            {/*  brand */}
            <AppFormFields name="brand" isRequired={true}>
              <FormLabel
                htmlFor="brand"
                as="legend"
                fontSize={"xs"}
                color={"#053559"}
              >
                Brand Name
              </FormLabel>
              <AppFormFields.Input
                type="text"
                name="brand"
                placeholder="Enter your brand name here"
              />
              {/* <AppFormFields.ErrorMessage name="firstname" /> */}
            </AppFormFields>
            {/*  brand */}

            {/*  category */}
            <AppFormFields name="category" isRequired={true}>
              <FormLabel
                htmlFor="category"
                as="legend"
                fontSize={"xs"}
                color={"#053559"}
              >
                Brand Name
              </FormLabel>
              <AppFormFields.SelectionInput
                options={campaignCat}
                name="category"
                placeholder="select your campaign catergory"
                _placeholder={{ color: "gray.800" }}
              />
              {/* <AppFormFields.ErrorMessage name="firstname" /> */}
            </AppFormFields>
            {/*  category */}

            {/* description */}
            <AppFormFields name="description" isRequired={true}>
              <FormLabel
                htmlFor="description"
                as="legend"
                fontSize={"xs"}
                color={"#053559"}
              >
                Campaign Description
              </FormLabel>
              <AppFormFields.textAreaInput
                name="description"
                placeholder="Enter your campaign description name here"
              />
              {/* <AppFormFields.ErrorMessage name="firstname" /> */}
            </AppFormFields>
            {/* description */}

            {/* budget */}
            <Flex flexDirection={"row"} gap={"3vw"}>
              <AppFormFields name="minBudget" isRequired={true}>
                <FormLabel
                  htmlFor="minBudget"
                  as="legend"
                  fontSize={"xs"}
                  color={"#053559"}
                >
                  Min Budget
                </FormLabel>
                <AppFormFields.Input
                  type="text"
                  name="minBudget"
                  fontSize={"xs"}
                  placeholder="enter minimum budget"
                />
                {/* <AppFormFields.ErrorMessage name="firstname" /> */}
              </AppFormFields>
              <AppFormFields name="maxBudget" isRequired={true}>
                <FormLabel
                  htmlFor="maxBudget"
                  as="legend"
                  fontSize={"xs"}
                  color={"#053559"}
                >
                  Max Budget
                </FormLabel>
                <AppFormFields.Input
                  type="text"
                  name="maxBudget"
                  fontSize={"xs"}
                  placeholder="enter maximum budget"
                />
                {/* <AppFormFields.ErrorMessage name="firstname" /> */}
              </AppFormFields>
            </Flex>
            {/* budget */}

            {/* platform */}
            <AppFormFields name="channels" isRequired={true}>
              <FormLabel
                htmlFor="channels"
                as="legend"
                fontSize={"xs"}
                color={"#053559"}
              >
                Select Preferred Channels
              </FormLabel>
              <AppFormFields.multiSelect name="channels" options={platforms} />
              {/* <AppFormFields.ErrorMessage name="firstname" /> */}
            </AppFormFields>
            {/* platform */}

            <AppFormSubmitBtn
              bgColor={"#053559"}
              variant="solid"
              color={"white"}
              fontSize={"xs"}
              size={"md"}
              textTransform={"capitalize"}
            >
              Create New Campaign
            </AppFormSubmitBtn>
          </AppForm>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default memo(AddCampaignModal);
