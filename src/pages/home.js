// import router from "../routes/router";
const home = {
  template: () => {
    const view = `
     <h1>I am home Page</h1>
     `;
    document.getElementById('root').innerHTML = view;
  },
};
export default home;
