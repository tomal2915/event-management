import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <img src="src/assets/siteground-404-page.png" alt="" />
    </div>
  );
}