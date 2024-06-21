import React from "react";

export const Newsletter: React.FC = () => {
  const formKey = process.env.NEXT_PUBLIC_LAUNCHLIST_FORM_KEY;
  const policyUrl = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;

  return (
    <div
      className="bg-cyan-600 w-full flex justify-center items-center"
      id="newsletter"
    >
      <div className="container py-12 px-4 lg:py-16 md:px-8 bg-brandGreen">
        <div className="mx-auto grid lg:grid-cols-5 gap-6 grid-cols-1">
          <div className="mb-8 lg:mb-0 lg:col-span-3">
            <h2 className="text-4xl leading-10 font-extrabold text-white">
              <span className="text-zinc-800">Stay Connected</span>&nbsp; with Desert Mamba Productions
            </h2>
            <p className="mt-3 text-lg md:max-w-2xl font-normal text-gray-200 leading-6">
              Join our newsletter to stay updated with the latest news and
              exclusive content from Desert Mamba Productions. Be the first to
              know about new releases, special promotions, and behind-the-scenes
              insights.
            </p>
          </div>
          <div className="lg:col-span-2 md:flex md:flex-col justify-center">
            <form
              className="grid grid-cols-1 md:grid-cols-5 gap-4"
              action={`https://getlaunchlist.com/s/${formKey}`}
              method="POST"
            >
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full md:col-span-3 px-5 py-3 text-black rounded focus:outline-none placeholder-gray-500"
              />
              <button
                type="submit"
                className="text-base font-medium text-nowrap md:col-span-2 rounded w-full py-3 bg-zinc-800 text-white duration-300 hover:bg-zinc-900"
              >
                Subscribe
              </button>
            </form>

            <div>
              <p className="text-sm mt-4 text-zinc-800 md:text-left">
                We care about the protection of your data. Read our&nbsp;
                <a
                  href={policyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
