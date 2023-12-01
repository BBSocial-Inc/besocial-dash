"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { constants } from "@/lib/utils";
import axiosInstance from "@/lib/axios";

const TOKEN_COOKIE_NAME = constants.TOKEN_COOKIE_NAME;

const DataContext = createContext<any>({});

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }: any) {
  const [campaigns, setCampaigns] = useState<any>(null);
  const [activeCampaign, setActiveCampaign] = useState<any>(null);
  const [leads, setLeads] = useState<any>(null);
  const [refresh, setRefresh] = useState("a");

  const createProject = async (body: any) => {
    await axiosInstance
      .post(constants.API_URL + "/projects", body)
      .then((response) => {
        // console.log(response.data);
        if (response.data?.status) {
          setRefresh(response.data?.project?._id);
          return true;
        }
      })
      .catch((error) => {
        console.error("Failed to create project", error);
        return false;
      });
  };

  const updateProject = async (id: any, body: any) => {
    return await axiosInstance
      .put(constants.API_URL + "/projects/" + id, body)
      .then((response) => {
        // console.log(response.data);
        if (response.data?.status) {
          setRefresh(response.data?.project?._id);
          return true;
        } else {
          return false;
        }
      })
      .catch((error) => {
        console.error("Failed to create project", error);
        return false;
      });
  };

  const selectActiveCampaign = (campaign: any) => {
    setActiveCampaign(campaign);
  };

  const fetchCampaings = async () => {
    try {
      const response = await axiosInstance.get(constants.API_URL + "/projects");

      if (response.data?.status) {
        setCampaigns(response.data?.projects);
        setActiveCampaign(response.data?.projects[0]);

        return response.data?.projects;
      } else {
        // console.log("STATUS FALSE");
      }
    } catch (error) {
      console.error("Failed to fetch user", error);
    }
  };

  const fetchLeads = async () => {
    try {
      const response = await axiosInstance.get(
        constants.API_URL + "/leads/" + activeCampaign?._id
      );

      if (response.data?.status) {
        setLeads(response.data?.leads);
        console.log(response.data?.leads);
        return response.data?.leads;
      } else {
        // console.log("STATUS FALSE");
      }
    } catch (error) {
      console.error("Failed to fetch user", error);
    }
  };

  useEffect(() => {
    fetchCampaings();
    if (activeCampaign) {
      fetchLeads();
      fetchLeads();
    }
  }, [refresh, activeCampaign]);

  return (
    <DataContext.Provider
      value={{
        campaigns,
        createProject,
        activeCampaign,
        selectActiveCampaign,
        fetchCampaings,
        updateProject,
        leads,
        fetchLeads,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
