import React, { useState } from 'react'
import DashboardLayout from '../../componets/layouts/DashboardLayout'
import IncomeOverview from '../../componets/Income/IncomeOverview';

const Income = () => {

  const [incomeData, setIncomeData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null,
  });

  const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);

  // Get All Income Details
  const fetchIncomeDetails = async () => {
    if (loading) return;

    setLoading(true);

    try {
      // const response = await axiosInstance.get(
      //   `${API_PATHS.INCONE.GET_ALL_INCOME}`
      // );

      if (response.data) {
        setIncomeData(response.data);
      }
    } catch (error) {
      console.log("Something went wrong. Please try again.", error)
    } finally{
      setLoading(false);
    }
  };

  // Handle Add Income
  const handleAddIncome = async (income) => {};

  // Delete Income
  const handleDeleteIncome = async (id) => {};

  // handle download income details
  const handleDownloadIncomeDetails = async () => {};


  return (
  <DashboardLayout activeMenu="Income">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div className="">
            <IncomeOverview
              transactions={incomeData}
              onAddIncome={() => setOpenAddIncomeModal(true)}
            />
          </div>
        </div>
      </div>
  </DashboardLayout>
  )
}

export default Income
