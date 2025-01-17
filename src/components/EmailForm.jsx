import { useState } from "react"

export default function EmailForm() {
    const [isInvalid, setIsInvalid] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        const emailInput = e.target.elements.email

        if (!emailInput.checkValidity()) {
            setIsInvalid(true)
        } else {
            setIsInvalid(false)
            // handle valid submission logic here
        }
    }

    return (
        <form
            noValidate
            onSubmit={handleSubmit}
            className={`
        relative flex flex-col
        md:order-3 md:my-10 md:max-w-[28rem] md:flex-row md:rounded-full md:bg-blue-900 md:p-1 md:text-desktop-preset-3
        ${
            isInvalid
                ? // On md screens and above, form outline is red if invalid
                  "md:outline md:outline-2 md:outline-red"
                : // Otherwise, form outline is blue on focus
                  "md:focus-within:outline md:focus-within:outline-2 md:focus-within:outline-slate-200"
        }
      `}
        >
            <label htmlFor="email" className="sr-only">
                Email address
            </label>

            <input
                placeholder="Email address"
                required
                type="email"
                aria-invalid={isInvalid}
                id="email"
                name="email"
                aria-describedby="email-error"
                className={`
          mb-2 block w-full rounded-full bg-blue-900 py-2.5 pl-8 text-desktop-preset-3 font-bold text-white
          ${
              isInvalid
                  ? // On mobile: red outline if invalid;
                    // On md+: no outline
                    "outline outline-2 outline-red md:outline-none md:focus:outline-none"
                  : // On mobile: blue outline on focus;
                    // On md+: no outline
                    "focus:outline focus:outline-2 focus:outline-slate-200 md:outline-none md:focus:outline-none"
          }
          md:mb-0 md:w-7/12 md:py-1.5
        `}
            />

            <p
                id="email-error"
                role="alert"
                className={`
          ${isInvalid ? "visible" : "invisible"}
          absolute -bottom-6 mt-2 pl-5 text-xs font-bold text-red
        `}
            >
                Oops! Please check your email
            </p>

            <button
                type="submit"
                className="block w-full rounded-full bg-green py-2.5 text-desktop-preset-3 font-bold text-blue-950 hover:bg-[#b3ffe2] md:w-5/12 md:py-1.5"
            >
                Request Access
            </button>
        </form>
    )
}
