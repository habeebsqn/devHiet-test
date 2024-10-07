import { createSlice } from "@reduxjs/toolkit";

interface DataState {
  campaigns: {
    id: number;
    title: string;
    brand: string;
    category: string;
    description: string;
    channels: string[];
    startDate: string;
    budget: {
      min: string;
      max: string;
    };
    status: string;
  }[];
}

const initialState: DataState = {
  campaigns: [
    {
      id: 1,
      title: "Epic Social Buzz",
      brand: "Samsung",
      category: "entertainment",
      description:
        "Aliquam massa donec proin sit duis magna eu maecenas. Ultricies id mattis lobortis proin congue proin elementum. Sed ac porttitor metus ante et suspesstn",
      channels: ["instagram", "facebook", "youtube", "tiktok"],
      startDate: "2024-10-01",
      budget: {
        min: "1000",
        max: "2000",
      },
      status: "active",
    },
    {
      id: 2,
      title: "Innovative Content Marketing",
      brand: "Google",
      category: "Product Review",
      description:
        "Vestibulum viverra mauris scelerisque quam. Quisque id diam vel quam elementum. Quisque non tellus eget massa consectetur. Sed vulputate consectetur nunc et ultricies",
      channels: ["instagram", "facebook", "youtube", "tiktok", "threads"],
      startDate: "2024-09-10",
      budget: {
        min: "500",
        max: "1500",
      },
      status: "active",
    },
    {
      id: 3,
      title: "Sustainable Branding",
      brand: "Apple",
      category: "Product Review",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus semper, consequat lectus vitae, ullamcorper neque. Sed auctor, arcu non tincidunt congue, est tellus lobortis diam, at luctus tellus",
      channels: ["instagram", "facebook", "youtube", "tiktok"],
      startDate: "2024-09-20",
      budget: {
        min: "200",
        max: "500",
      },
      status: "active",
    },
    {
      id: 4,
      title: "Green Tech Solutions",
      brand: "Facebook",
      category: "Product Review",
      description:
        "Proin bibendum, quam a consectetur consectetur, felis neque consectetur nunc, vel condimentum nunc velit et est. Sed et orci vel velit tincidunt consequat. Sed et orci vel velit tincidunt consequat",
      channels: ["instagram", "facebook", "youtube", "tiktok"],
      startDate: "2024-10-07",
      budget: {
        min: "150",
        max: "300",
      },
      status: "active",
    },
  ],
};

const dataSlice = createSlice({
  name: "data",

  initialState: initialState,

  reducers: {
    onAddCampaign(currentState, actions) {
      currentState.campaigns.unshift(actions.payload);
    },
  },
});

export const dataSliceAction = dataSlice.actions;

export default dataSlice;
