import axios from "axios";

export default {
  async createBudget(
    context,
    { budget_nominal, bulan, category, is_every_month, kota }
  ) {
    let url =
      "https://fps-technoscape-default-rtdb.asia-southeast1.firebasedatabase.app";

    let userId = localStorage.getItem("userId");
    let idToken = localStorage.getItem("idToken");

    try {
      await axios({
        method: "PUT",
        url: `${url}/${userId}/budget.json?auth=${idToken}`,
        data: {
          budget: budget_nominal,
          bulan: bulan,
          category: category,
          is_every_month: is_every_month,
          kota: kota,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  async getBudget(context) {
    let url =
      "https://fps-technoscape-default-rtdb.asia-southeast1.firebasedatabase.app";

    let userId = localStorage.getItem("userId");
    let idToken = localStorage.getItem("idToken");

    try {
      let response = await axios({
        method: "GET",
        url: `${url}/${userId}/budget.json?auth=${idToken}`,
      });

      let budget = response.data;
      context.commit("setBudget", { budget });
    } catch (error) {
      console.log(error.message);
    }
  },
  async getBudgetTemplate(context, { kota, tipe }) {
    
    let idToken = localStorage.getItem("idToken");

    let url = `https://fps-technoscape-default-rtdb.asia-southeast1.firebasedatabase.app/template_budgeting.json?auth=${idToken}`;

    if (kota && tipe) {
      url = `https://fps-technoscape-default-rtdb.asia-southeast1.firebasedatabase.app/template_budgeting/${kota}/${tipe}.json?auth=${idToken}`
    }

    console.log(url);

    try {
      let response = await axios({
        method: "GET",
        url: url
      });

      let template = response.data;
      context.commit("setTemplate", { template });
    } catch (error) {
      console.log(error.message);
    }
  },
};
