// AUTO-GENERATED FILE. Do not edit manually.
export const components = {
  Button: {
    props: {
      name: {
        type: "string",
      },
      className: {
        type: "string",
      },
      id: {
        type: "string",
      },
      style: {
        type: "CSSProperties",
      },
      variant: {
        type: "enum",
        default: "primary",
      },
    },
  },
  components: {
    props: {
      name: {
        type: "string",
      },
      className: {
        type: "string",
      },
      id: {
        type: "string",
      },
      style: {
        type: "CSSProperties",
      },
      label: {
        type: "string",
      },
      error: {
        type: "string",
      },
      helperText: {
        type: "string",
      },
    },
  },
  TextArea: {
    props: {
      name: {
        type: "string",
      },
      className: {
        type: "string",
      },
      id: {
        type: "string",
      },
      style: {
        type: "CSSProperties",
      },
      label: {
        type: "string",
      },
      error: {
        type: "string",
      },
      helperText: {
        type: "string",
      },
      ref: {
        type: "Ref<HTMLTextAreaElement>",
        description:
          "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",
      },
    },
  },
  BikeListItem: {
    props: {
      bike: {
        type: "Bike",
        required: true,
      },
    },
  },
  PasswordField: {
    props: {
      name: {
        type: "string",
      },
      className: {
        type: "string",
      },
      id: {
        type: "string",
      },
      style: {
        type: "CSSProperties",
      },
      label: {
        type: "string",
      },
      error: {
        type: "string",
      },
      helperText: {
        type: "string",
      },
    },
  },
  LPFAQuestion: {
    props: {
      question: {
        type: "ReactNode",
        required: true,
      },
      answer: {
        type: "ReactNode",
        required: true,
      },
      defaultOpen: {
        type: "boolean",
      },
      open: {
        type: "boolean",
      },
      id: {
        type: "string",
      },
      className: {
        type: "string",
      },
    },
  },
  LPFeature: {
    props: {
      emoji: {
        type: "string",
        required: true,
      },
      title: {
        type: "string",
        required: true,
      },
      description: {
        type: "string",
        required: true,
      },
      as: {
        type: "enum",
        default: "article",
      },
      href: {
        type: "string",
      },
    },
  },
  TextField: {
    props: {
      name: {
        type: "string",
      },
      className: {
        type: "string",
      },
      id: {
        type: "string",
      },
      style: {
        type: "CSSProperties",
      },
      label: {
        type: "string",
      },
      error: {
        type: "string",
      },
      helperText: {
        type: "string",
      },
    },
  },
  Tickbox: {
    props: {
      name: {
        type: "string",
      },
      className: {
        type: "string",
      },
      id: {
        type: "string",
      },
      style: {
        type: "CSSProperties",
      },
      label: {
        type: "ReactNode",
      },
      description: {
        type: "ReactNode",
      },
    },
  },
} as const;
export type ComponentManifest = typeof components;
