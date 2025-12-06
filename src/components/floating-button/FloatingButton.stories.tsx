import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { FloatingButton } from "./FloatingButton";
import { Button } from "../button/Button";

const meta = {
  title: "Components/FloatingButton",
  component: FloatingButton,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    targetId: "floating-button-target",
    variant: "primary",
    children: "Apply now",
    iconRight: "arrow-right",
  },
} satisfies Meta<typeof FloatingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const LongPage: React.FC<{ args: any }> = ({ args }) => {
  const targetId = "floating-button-target";

  return (
    <div style={{ minHeight: "220vh", background: "#f9f9f9" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 200px" }}>
        <h1 style={{ marginBottom: 16 }}>Demo page</h1>
        <p style={{ marginBottom: 16 }}>
          Scroll down to move the original button out of view. Scroll back up to reveal the floating button anchored near the bottom edge, ready for quick actions.
        </p>
        <p style={{ marginBottom: 24 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit sapien quis feugiat gravida. Sed vehicula
          ligula sit amet arcu interdum, vitae placerat lacus dictum. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; integer sit amet ex ac risus tempor mollis. Maecenas lobortis dui in leo tempor, quis porttitor felis mattis.
        </p>
        <p style={{ marginBottom: 24 }}>
          Phasellus sit amet libero at enim pulvinar feugiat. Integer et eros nec elit semper tincidunt. Nam vehicula cursus
          ligula, sit amet luctus risus pulvinar non. Aenean non accumsan erat. Sed imperdiet nisl ut posuere luctus. Aliquam
          erat volutpat. Vivamus quis magna non est ullamcorper condimentum vitae et orci.
        </p>
        <p style={{ marginBottom: 24 }}>
          Praesent vehicula, augue id vulputate convallis, urna mi lacinia dolor, a bibendum eros nunc sit amet lectus. Etiam
          gravida eu ipsum ac tristique. Donec egestas, mi id accumsan bibendum, nibh lectus vestibulum lorem, in condimentum
          sem nibh nec nulla. Nulla facilisi. Aliquam erat volutpat. Suspendisse suscipit purus non est viverra, vel hendrerit
          lectus gravida.
        </p>
        <p style={{ marginBottom: 24 }}>
          Cras vel sapien at dolor elementum fringilla. Integer porta nisi et sapien malesuada, vitae fermentum lorem volutpat.
          Nulla ut massa ullamcorper, cursus odio at, porta nulla. Duis ut sapien id lacus laoreet cursus. Proin vitae justo at
          arcu congue bibendum nec id risus. Suspendisse vel sodales nibh, et pharetra augue.
        </p>
        <p style={{ marginBottom: 24 }}>
          Sed sollicitudin orci vel dui sagittis, id maximus est euismod. Pellentesque condimentum congue velit, vitae aliquet
          magna ultricies ut. Maecenas nec risus nec justo suscipit rutrum. Donec finibus nunc eget nunc dapibus, ac tempor nisl
          pulvinar. Curabitur vitae congue risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
          cubilia curae.
        </p>
        <p style={{ marginBottom: 24 }}>
          Quisque convallis dui ligula, vitae rhoncus felis hendrerit in. Vivamus tincidunt orci vitae varius venenatis.
          Pellentesque feugiat porttitor sapien, id gravida dolor congue vitae. Vestibulum tristique sem non nunc pellentesque,
          non facilisis eros vulputate. Sed vel lacus et magna finibus ultrices sit amet a lorem.
        </p>
        <p style={{ marginBottom: 24 }}>
          Integer imperdiet metus sit amet ligula pharetra, at ultricies nibh condimentum. Morbi gravida, nibh id tincidunt
          malesuada, mauris mi porta nisl, at porta odio massa ac urna. In pulvinar dui vel nibh hendrerit, at sollicitudin nunc
          vestibulum. Nulla facilisi. Curabitur condimentum metus vel ex laoreet, non efficitur est vulputate.
        </p>
        <p style={{ marginBottom: 24 }}>
          Aliquam erat volutpat. Vivamus tempor sagittis tortor, et volutpat neque porttitor nec. Praesent scelerisque semper
          velit, a suscipit tellus lobortis in. Donec pretium euismod lectus, vitae luctus augue lobortis ac. Suspendisse porta
          elementum magna, at finibus mi auctor at.
        </p>
        <Button
          id={targetId}
          variant={args.variant}
          size={args.size}
          disabled={args.disabled}
          loading={args.loading}
          iconRight={args.iconRight}
          iconColor={args.iconColor}
        >
          {args.children}
        </Button>
        <div style={{ height: "220vh" }} />
      </div>

      <FloatingButton targetId={targetId} {...args} />
    </div>
  );
};

export const Default: Story = {
  args: {},
  render: (args) => <LongPage args={args} />,
};

export const MobileViewport: Story = {
  args: {},
  render: (args) => <LongPage args={args} />,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
