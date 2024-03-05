// maps to root `/` URL

import variables from "./variables.module.scss";

export default function Page() {
  return <h1 className="text-3xl" style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>;
}
