import { PageTitleWrapper } from "./PageTitleStyle";

export default function PageTitle({ title, pictureUrl }) {
  return (
    <PageTitleWrapper>
      {pictureUrl ? <img src={pictureUrl} alt="user" /> : ''}
      {title}
    </PageTitleWrapper>
  );
}
