import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide text-slate-900 dark:text-neutral-100">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border bg-white rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
              <p className="text-4xl mb-6 text-slate-900 dark:text-neutral-100">
                {option.title}
                {option.title === "Pro" && (
                  <span className="ml-2 text-sm text-blue-600 dark:text-blue-400">(Most Popular)</span>
                )}
              </p>
              <p className="mb-6">
                <span className="text-5xl mt-2 mr-2 text-slate-900 dark:text-neutral-100">{option.price}</span>
                <span className="text-slate-500 dark:text-neutral-400 tracking-tight">/Month</span>
              </p>

              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-4 flex items-center text-slate-700 dark:text-neutral-200">
                    <CheckCircle2 className="text-blue-600 dark:text-blue-400" />
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-3 mt-8 tracking-tight text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
