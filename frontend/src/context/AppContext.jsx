import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { categories } from "../assets/assets";
import { jobs } from "../assets/assets";
import toast from "react-hot-toast";
import { companies } from "../assets/assets";
import { applicants } from "../assets/assets";
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(false);
  const [employer, setEmployer] = useState(false);
  const [admin, setadmin] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  const [jobsData, setJobData] = useState([]);
  const [query, setQuery] = useState("");
  const [isJobApplied, setIsJobApplied] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [applicantsData, setApplicantsData] = useState([]);

  const fetchApplicants = () => {
    setApplicantsData(applicants);
  };

  const fetchCompanies = () => {
    setCompanyData(companies);
  };

  const fetchCategories = async () => {
    setCategoriesData(categories);
  };

  const fetchJobs = async () => {
    setJobData(jobs);
  };

  const saveJob = (jobs) => {
    setSavedJobs((prev) => {
      const exists = prev.find((item) => item._id === jobs._id);
      if (exists) {
        return prev;
      } else {
        return [...prev, jobs];
      }
    });
    toast.success("Job saved successfully");
  };

  useEffect(() => {
    fetchCategories();
    fetchJobs();
    fetchCompanies();
    fetchApplicants();
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    employer,
    setEmployer,
    admin,
    setadmin,
    categoriesData,
    jobsData,
    query,
    setQuery,
    isJobApplied,
    setIsJobApplied,
    savedJobs,
    saveJob,
    companyData,
    setCompanyData,
    applicantsData,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
