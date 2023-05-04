declare namespace PageContent {
  interface Page {
    title: string;
    button: Button;
    image: Image;
  }

  type Button = {
    title: string;
    url: string;
  };

  type Image = {
    src: string;
    alt: string;
  };
}