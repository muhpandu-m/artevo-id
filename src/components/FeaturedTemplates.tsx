import TemplateImg1 from '../assets/templates/template-1.jpg';
import TemplateImg2 from '../assets/templates/template-2.jpg';
import TemplateImg3 from '../assets/templates/template-3.jpg';

const templates = [
  {
    id: 1,
    name: "Template #1",
    image: TemplateImg1,
    previewUrl: "#",
  },
  {
    id: 2,
    name: "Template #2",
    image: TemplateImg2,
    previewUrl: "#",
  },
  {
    id: 3,
    name: "Template #3",
    image: TemplateImg3,
    previewUrl: "#",
  },
];

const FeaturedTemplates = () => {
  return (
    <section className="featured-templates" id="templates">
      <h2>Featured Templates</h2>
      <div className="template-grid">
        {templates.map((template) => (
          <div className="template-card" key={template.id}>
            <img src={template.image} alt={template.name} />
            <h3>{template.name}</h3>
            <a href={template.previewUrl} className="preview-button">
              Preview
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTemplates;