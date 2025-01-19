import { PatientForm } from "@/components/forms/PatientForm";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/*otp verififaction*/}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px] ">
          <h1 className="header text-white text-4xl mb-8">CarePoint</h1>
          <PatientForm />
          <div className="text-14-regular mt-4 flex justify-between">
            <p className="justify-items-end text-dark-600  xl:text-left">
              © 2024 CarePoint. All rights reserved
            </p>
            {/*<Link to="/?admin=true" className="text-green-500">
              Admin
            </Link>
            */}
          </div>
        </div>
      </section>
      <img
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%] hidden lg:block"
      />
    </div>
  );
}

export default Home;
