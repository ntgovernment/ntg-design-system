import{j as e}from"./jsx-runtime-u17CrQMm.js";import{L as B}from"./Link-BwgP2sL6.js";import"./iframe-5hMHJX0T.js";import{T as r}from"./Tag-aYSocsAw.js";import{B as i}from"./Button-C6AcYB-H.js";import{I as t}from"./Image-DSIzNg1i.js";import{I as R}from"./Icon-D9ZymXa3.js";import"./preload-helper-PPVm8Dsz.js";const n=({image:j,header:I,icon:s,variant:o="default",title:N,description:d,footer:k,href:_,disabled:T=!1,className:L="",...S})=>{const a="ntgds-card",F=[a,o==="minicard"&&`${a}--minicard`,o==="static"&&`${a}--static`,T&&`${a}--disabled`,L].filter(Boolean).join(" "),D=e.jsxs("article",{className:F,...!_&&!T&&{tabIndex:0},...S,children:[j&&e.jsx("div",{className:`${a}__image`,children:j}),e.jsxs("div",{className:`${a}__content`,children:[I&&e.jsx("div",{className:`${a}__header`,children:I}),e.jsxs("div",{className:`${a}__body`,children:[s&&o==="static"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`${a}__icon ${a}__icon--large`,children:s}),e.jsxs("div",{className:`${a}__title-and-body`,children:[e.jsx("div",{className:`${a}__title-container`,children:e.jsx("h3",{className:`${a}__title`,children:N})}),d&&e.jsx("p",{className:`${a}__description`,children:d})]})]}):s?e.jsxs("div",{className:`${a}__title-container ${o==="minicard"?`${a}__title-container--vertical`:""}`,children:[e.jsx("div",{className:`${a}__icon`,children:s}),e.jsx("h3",{className:`${a}__title`,children:N})]}):e.jsx("h3",{className:`${a}__title`,children:N}),!s||o!=="static"?d&&e.jsx("p",{className:`${a}__description`,children:d}):null]}),k&&e.jsx("div",{className:`${a}__footer`,children:k})]})]});return _&&!T?e.jsx(B,{href:_,className:"ntgds-card-link",children:D}):D};try{n.displayName="Card",n.__docgenInfo={description:`Card component for displaying content with optional image, header, footer, and clickable behavior.

Integrates with Tag, Button, Image, and Link components from the design system.
Supports responsive grid layouts with 4-6-12 column constraints at lg/md/mobile breakpoints.

When href is provided, the entire card becomes clickable via Link wrapper (footer is excluded).
When footer is provided, href should be omitted to avoid nested interactivity issues.`,displayName:"Card",props:{image:{defaultValue:null,description:"Image content (pass Image component as ReactNode for maximum flexibility)",name:"image",required:!1,type:{name:"ReactNode"}},header:{defaultValue:null,description:"Header content (typically Tag + date span with .ntgds-card__date class)",name:"header",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"Icon to display inline with title (optional, typically Icon component)",name:"icon",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"default"},description:"Card variant: default (inline icon), minicard (vertical icon), or static (large left icon)",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"minicard"'},{value:'"static"'}]}},title:{defaultValue:null,description:"Card title (required for semantic consistency, screen readers, and SEO)",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"Card description text",name:"description",required:!1,type:{name:"string"}},footer:{defaultValue:null,description:"Footer content (typically Button with tertiary variant and arrow icon)",name:"footer",required:!1,type:{name:"ReactNode"}},href:{defaultValue:null,description:"Link destination (makes entire card clickable, footer remains visible)",name:"href",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the card is disabled",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}}}catch{}const q={title:"Components/Card",component:n,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{image:{control:!1,description:"Image content (pass Image component as ReactNode)"},header:{control:!1,description:"Header content (typically Tag + date with .ntgds-card__date)"},title:{control:"text",description:"Card title (required for accessibility and SEO)"},description:{control:"text",description:"Card description text"},footer:{control:!1,description:"Footer content (typically Button with tertiary variant)"},href:{control:"text",description:"Link destination (makes card clickable, mutually exclusive with footer)"},disabled:{control:"boolean",description:"Whether the card is disabled"},className:{control:"text",description:"Additional CSS classes"}}},c={args:{title:"Card Title",description:"This is a simple card with just a title and description."}},l={args:{image:e.jsx(t,{src:"https://picsum.photos/400/200",alt:"Placeholder image",width:"400",height:"200"}),title:"Card with Image",description:"This card includes an image component passed as ReactNode."}},p={args:{header:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"top-end-ac",children:"REGION"}),e.jsx("span",{className:"ntgds-card__date",children:"12 Dec 2024"})]}),title:"Card with Header",description:"This card has a header with a Tag and date."}},h={args:{icon:e.jsx(R,{name:"heart",size:"md",color:"primary"}),title:"Card with Icon",description:"Join in and honour the resilience of survivors and the lives lost."},parameters:{docs:{description:{story:"Card with an icon displayed inline with the title. The icon and title are aligned with an 8px gap in a flex container."}}}},m={args:{icon:e.jsx(R,{name:"compass",size:"md",color:"primary"}),variant:"minicard",title:"Card title"},parameters:{docs:{description:{story:"Minicard variant with icon positioned vertically above the title. Compact layout with 24px padding ideal for topic cards or navigation elements."}}}},g={args:{icon:e.jsx(R,{name:"phone",size:"lg",color:"primary"}),variant:"static",title:"Card title",description:"1800 000 000 or ext 12345"},parameters:{docs:{description:{story:"Static card variant with large icon (48px) on the left and title/description stacked on the right. Horizontal layout with 12px gap ideal for contact cards or info blocks."}}}},u={args:{title:"Card with Footer",description:"This card includes a footer with a tertiary button.",footer:e.jsx(i,{variant:"tertiary",iconRight:"arrow-right",padLeft:!1,children:"Read more"})}},v={name:"Full Card (Figma Design)",args:{image:e.jsx(t,{src:"https://picsum.photos/400/200",alt:"Northern Territory landscape",width:"400",height:"200"}),header:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"top-end-ac",children:"TOP END"}),e.jsx("span",{className:"ntgds-card__date",children:"2 Dec 2025"})]}),title:"NT Government Announces New Initiative",description:"Comprehensive update on the latest program designed to support Territory communities and drive regional development.",footer:e.jsx(i,{variant:"tertiary",iconRight:"arrow-right",children:"Read more"})},parameters:{docs:{description:{story:"Complete card implementation matching Figma specifications with all elements: image, Tag header, date, title, description, and tertiary button footer."}}}},f={args:{image:e.jsx(t,{src:"https://picsum.photos/seed/news/400/200",alt:"News article thumbnail",width:"400",height:"200"}),header:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"default",children:"NEWS"}),e.jsx("span",{className:"ntgds-card__date",children:"1 Dec 2025"})]}),title:"Community Consultation Opens for Major Project",description:"Residents invited to provide feedback on proposed infrastructure improvements in the greater Darwin area.",footer:e.jsx(i,{variant:"tertiary",iconRight:"arrow-right",padLeft:!1,children:"Learn more"})}},y={args:{image:e.jsx(t,{src:"https://picsum.photos/seed/event/400/200",alt:"Event venue",width:"400",height:"200"}),header:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"darwin-ac",children:"DARWIN"}),e.jsx("span",{className:"ntgds-card__date",children:"15 Dec 2025"})]}),title:"Annual Territory Day Celebrations",description:"Join us for fireworks, live music, and family activities at Mindil Beach to celebrate Territory Day.",footer:e.jsx(i,{variant:"tertiary",iconRight:"arrow-right",padLeft:!1,children:"View details"})},parameters:{docs:{description:{story:"Event card using the Darwin accessible color variant (darwin-ac) for improved contrast and WCAG compliance."}}}},x={args:{image:e.jsx(t,{src:"https://picsum.photos/seed/click/400/200",alt:"Article preview",width:"400",height:"200"}),header:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"subtle",children:"ARTICLE"}),e.jsx("span",{className:"ntgds-card__date",children:"28 Nov 2025"})]}),title:"Understanding Territory Heritage Programs",description:"Explore how the NT Government is preserving and promoting indigenous heritage sites across the region.",href:"/articles/heritage-programs"},parameters:{docs:{description:{story:"Clickable card with href prop. The entire card becomes a link (footer is excluded). Hover to see border color change and the title color shift to the link hover token."}}}},w={name:"Footer Hover Sync",args:{image:e.jsx(t,{src:"https://picsum.photos/seed/sync/400/200",alt:"Sync hover demo",width:"400",height:"200"}),header:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"default",children:"NEWS"}),e.jsx("span",{className:"ntgds-card__date",children:"3 Dec 2025"})]}),title:"Hover syncs title and footer label",description:"Hovering the card container updates the tertiary footer button label color to the link hover token, matching the RN hover spec.",footer:e.jsx(i,{variant:"tertiary",iconRight:"arrow-right",padLeft:!1,children:"Learn more"})},parameters:{docs:{description:{story:"Non-clickable card demonstrating container hover updating the footer tertiary button label color. This aligns footer behavior with title hover styling."}}}},C={args:{image:e.jsx(t,{src:"https://picsum.photos/seed/disabled/400/200",alt:"Disabled card",width:"400",height:"200"}),title:"Disabled Card Example",description:"This card is disabled and non-interactive.",footer:e.jsx(i,{variant:"tertiary",iconRight:"arrow-right",children:"Read more"}),disabled:!0}},b={name:"Responsive Grid Layout",render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"24px",maxWidth:"1200px"},children:[e.jsx(n,{image:e.jsx(t,{src:"https://picsum.photos/seed/grid1/400/200",alt:"Card 1",width:"400",height:"200"}),header:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"darwin-ac",children:"DARWIN"}),e.jsx("span",{className:"ntgds-card__date",children:"2 Dec 2025"})]}),title:"Grid Card One",description:"Demonstrating responsive grid layout with 4-6-12 column behavior.",footer:e.jsx(i,{variant:"tertiary",iconRight:"arrow-right",padLeft:!1,children:"Read more"})}),e.jsx(n,{image:e.jsx(t,{src:"https://picsum.photos/seed/grid2/400/200",alt:"Card 2",width:"400",height:"200"}),header:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"top-end-ac",children:"TOP END"}),e.jsx("span",{className:"ntgds-card__date",children:"1 Dec 2025"})]}),title:"Grid Card Two",description:"Cards automatically adjust width at breakpoints: 33.33% (lg), 50% (md), 100% (mobile).",footer:e.jsx(i,{variant:"tertiary",iconRight:"arrow-right",padLeft:!1,children:"Learn more"})}),e.jsx(n,{image:e.jsx(t,{src:"https://picsum.photos/seed/grid3/400/200",alt:"Card 3",width:"400",height:"200"}),header:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"barkly-ac",children:"BARKLY"}),e.jsx("span",{className:"ntgds-card__date",children:"30 Nov 2025"})]}),title:"Grid Card Three",description:"Image height also responds: 200px on desktop, 150px on mobile.",footer:e.jsx(i,{variant:"tertiary",iconRight:"arrow-right",padLeft:!1,children:"View details"})}),e.jsx(n,{image:e.jsx(t,{src:"https://picsum.photos/seed/grid4/400/200",alt:"Card 4",width:"400",height:"200"}),header:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"central-australia-ac",children:"CENTRAL"}),e.jsx("span",{className:"ntgds-card__date",children:"29 Nov 2025"})]}),title:"Grid Card Four",description:"Resize browser window to see responsive grid behavior in action.",footer:e.jsx(i,{variant:"tertiary",iconRight:"arrow-right",padLeft:!1,children:"Discover"})})]}),parameters:{docs:{description:{story:"Grid layout demonstration showing 4 cards with responsive behavior. Cards display as 4 columns on large screens (≥992px), 6 columns on medium screens (≥768px), and 12 columns on mobile (<768px). Image heights adjust from 200px (desktop) to 150px (mobile)."}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Card Title",
    description: "This is a simple card with just a title and description."
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    image: <Image src="https://picsum.photos/400/200" alt="Placeholder image" width="400" height="200" />,
    title: "Card with Image",
    description: "This card includes an image component passed as ReactNode."
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    header: <>\r
        <Tag variant="top-end-ac">REGION</Tag>\r
        <span className="ntgds-card__date">12 Dec 2024</span>\r
      </>,
    title: "Card with Header",
    description: "This card has a header with a Tag and date."
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Icon name="heart" size="md" color="primary" />,
    title: "Card with Icon",
    description: "Join in and honour the resilience of survivors and the lives lost."
  },
  parameters: {
    docs: {
      description: {
        story: "Card with an icon displayed inline with the title. The icon and title are aligned with an 8px gap in a flex container."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Icon name="compass" size="md" color="primary" />,
    variant: "minicard",
    title: "Card title"
  },
  parameters: {
    docs: {
      description: {
        story: "Minicard variant with icon positioned vertically above the title. Compact layout with 24px padding ideal for topic cards or navigation elements."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Icon name="phone" size="lg" color="primary" />,
    variant: "static",
    title: "Card title",
    description: "1800 000 000 or ext 12345"
  },
  parameters: {
    docs: {
      description: {
        story: "Static card variant with large icon (48px) on the left and title/description stacked on the right. Horizontal layout with 12px gap ideal for contact cards or info blocks."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Card with Footer",
    description: "This card includes a footer with a tertiary button.",
    footer: <Button variant="tertiary" iconRight="arrow-right" padLeft={false}>\r
        Read more\r
      </Button>
  }
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Full Card (Figma Design)",
  args: {
    image: <Image src="https://picsum.photos/400/200" alt="Northern Territory landscape" width="400" height="200" />,
    header: <>\r
        <Tag variant="top-end-ac">TOP END</Tag>\r
        <span className="ntgds-card__date">2 Dec 2025</span>\r
      </>,
    title: "NT Government Announces New Initiative",
    description: "Comprehensive update on the latest program designed to support Territory communities and drive regional development.",
    footer: <Button variant="tertiary" iconRight="arrow-right">\r
        Read more\r
      </Button>
  },
  parameters: {
    docs: {
      description: {
        story: "Complete card implementation matching Figma specifications with all elements: image, Tag header, date, title, description, and tertiary button footer."
      }
    }
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    image: <Image src="https://picsum.photos/seed/news/400/200" alt="News article thumbnail" width="400" height="200" />,
    header: <>\r
        <Tag variant="default">NEWS</Tag>\r
        <span className="ntgds-card__date">1 Dec 2025</span>\r
      </>,
    title: "Community Consultation Opens for Major Project",
    description: "Residents invited to provide feedback on proposed infrastructure improvements in the greater Darwin area.",
    footer: <Button variant="tertiary" iconRight="arrow-right" padLeft={false}>\r
        Learn more\r
      </Button>
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    image: <Image src="https://picsum.photos/seed/event/400/200" alt="Event venue" width="400" height="200" />,
    header: <>\r
        <Tag variant="darwin-ac">DARWIN</Tag>\r
        <span className="ntgds-card__date">15 Dec 2025</span>\r
      </>,
    title: "Annual Territory Day Celebrations",
    description: "Join us for fireworks, live music, and family activities at Mindil Beach to celebrate Territory Day.",
    footer: <Button variant="tertiary" iconRight="arrow-right" padLeft={false}>\r
        View details\r
      </Button>
  },
  parameters: {
    docs: {
      description: {
        story: "Event card using the Darwin accessible color variant (darwin-ac) for improved contrast and WCAG compliance."
      }
    }
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    image: <Image src="https://picsum.photos/seed/click/400/200" alt="Article preview" width="400" height="200" />,
    header: <>\r
        <Tag variant="subtle">ARTICLE</Tag>\r
        <span className="ntgds-card__date">28 Nov 2025</span>\r
      </>,
    title: "Understanding Territory Heritage Programs",
    description: "Explore how the NT Government is preserving and promoting indigenous heritage sites across the region.",
    href: "/articles/heritage-programs"
  },
  parameters: {
    docs: {
      description: {
        story: "Clickable card with href prop. The entire card becomes a link (footer is excluded). Hover to see border color change and the title color shift to the link hover token."
      }
    }
  }
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Footer Hover Sync",
  args: {
    image: <Image src="https://picsum.photos/seed/sync/400/200" alt="Sync hover demo" width="400" height="200" />,
    header: <>\r
        <Tag variant="default">NEWS</Tag>\r
        <span className="ntgds-card__date">3 Dec 2025</span>\r
      </>,
    title: "Hover syncs title and footer label",
    description: "Hovering the card container updates the tertiary footer button label color to the link hover token, matching the RN hover spec.",
    footer: <Button variant="tertiary" iconRight="arrow-right" padLeft={false}>\r
        Learn more\r
      </Button>
  },
  parameters: {
    docs: {
      description: {
        story: "Non-clickable card demonstrating container hover updating the footer tertiary button label color. This aligns footer behavior with title hover styling."
      }
    }
  }
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    image: <Image src="https://picsum.photos/seed/disabled/400/200" alt="Disabled card" width="400" height="200" />,
    title: "Disabled Card Example",
    description: "This card is disabled and non-interactive.",
    footer: <Button variant="tertiary" iconRight="arrow-right">\r
        Read more\r
      </Button>,
    disabled: true
  }
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Responsive Grid Layout",
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "24px",
    maxWidth: "1200px"
  }}>\r
      <Card image={<Image src="https://picsum.photos/seed/grid1/400/200" alt="Card 1" width="400" height="200" />} header={<>\r
            <Tag variant="darwin-ac">DARWIN</Tag>\r
            <span className="ntgds-card__date">2 Dec 2025</span>\r
          </>} title="Grid Card One" description="Demonstrating responsive grid layout with 4-6-12 column behavior." footer={<Button variant="tertiary" iconRight="arrow-right" padLeft={false}>\r
            Read more\r
          </Button>} />\r
      <Card image={<Image src="https://picsum.photos/seed/grid2/400/200" alt="Card 2" width="400" height="200" />} header={<>\r
            <Tag variant="top-end-ac">TOP END</Tag>\r
            <span className="ntgds-card__date">1 Dec 2025</span>\r
          </>} title="Grid Card Two" description="Cards automatically adjust width at breakpoints: 33.33% (lg), 50% (md), 100% (mobile)." footer={<Button variant="tertiary" iconRight="arrow-right" padLeft={false}>\r
            Learn more\r
          </Button>} />\r
      <Card image={<Image src="https://picsum.photos/seed/grid3/400/200" alt="Card 3" width="400" height="200" />} header={<>\r
            <Tag variant="barkly-ac">BARKLY</Tag>\r
            <span className="ntgds-card__date">30 Nov 2025</span>\r
          </>} title="Grid Card Three" description="Image height also responds: 200px on desktop, 150px on mobile." footer={<Button variant="tertiary" iconRight="arrow-right" padLeft={false}>\r
            View details\r
          </Button>} />\r
      <Card image={<Image src="https://picsum.photos/seed/grid4/400/200" alt="Card 4" width="400" height="200" />} header={<>\r
            <Tag variant="central-australia-ac">CENTRAL</Tag>\r
            <span className="ntgds-card__date">29 Nov 2025</span>\r
          </>} title="Grid Card Four" description="Resize browser window to see responsive grid behavior in action." footer={<Button variant="tertiary" iconRight="arrow-right" padLeft={false}>\r
            Discover\r
          </Button>} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Grid layout demonstration showing 4 cards with responsive behavior. Cards display as 4 columns on large screens (≥992px), 6 columns on medium screens (≥768px), and 12 columns on mobile (<768px). Image heights adjust from 200px (desktop) to 150px (mobile)."
      }
    }
  }
}`,...b.parameters?.docs?.source}}};const z=["Default","WithImage","WithHeader","WithIcon","MiniCard","StaticCard","WithFooter","FullCardFigma","NewsCard","EventCard","ClickableCard","FooterHoverSync","DisabledCard","GridDemo"];export{x as ClickableCard,c as Default,C as DisabledCard,y as EventCard,w as FooterHoverSync,v as FullCardFigma,b as GridDemo,m as MiniCard,f as NewsCard,g as StaticCard,u as WithFooter,p as WithHeader,h as WithIcon,l as WithImage,z as __namedExportsOrder,q as default};
