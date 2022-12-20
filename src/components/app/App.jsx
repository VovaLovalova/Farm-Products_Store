import "./styles.css";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import { benefitsList } from "/src/mocks.js";

export default function App() {
  return (
    <div>
      <PageWrapper benefitsList={benefitsList} />
    </div>
  );
}
