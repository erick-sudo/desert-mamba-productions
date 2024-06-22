import {
  Menu,
  Tooltip,
  useCaptionOptions,
  type MenuPlacement,
  type TooltipPlacement,
} from "@vidstack/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ClosedCaptionsIcon,
  RadioButtonIcon,
  RadioButtonSelectedIcon,
  SettingsIcon,
} from "@vidstack/react/icons";
import { buttonClass, buttonIconClass, tooltipClass } from "./buttons";

export interface SettingsProps {
  placement: MenuPlacement;
  tooltipPlacement: TooltipPlacement;
}

export const menuClass =
  "animate-out fade-out slide-out-to-bottom-2 data-[open]:animate-in data-[open]:fade-in data-[open]:slide-in-from-bottom-4 flex h-[var(--menu-height)] max-h-[400px] min-h-[260px] flex-col vertical-scrollbar overscroll-y-contain rounded-md border border-white/10 bg-cyan-500/20 backdrop-blur-sm py-1 pl-1 font-sans text-[15px] font-medium outline-none transition-[height] duration-300 will-change-[height] data-[resizing]:overflow-hidden";

export const submenuClass =
  "hidden w-full flex-col mt-1 items-start justify-center outline-none data-[keyboard]:mt-[3px] data-[open]:inline-block";

export function Settings({ placement, tooltipPlacement }: SettingsProps) {
  return (
    <Menu.Root className="parent">
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Menu.Button className={buttonClass}>
            <SettingsIcon
              className={`${buttonIconClass} transform transition-transform duration-200 ease-out group-data-[open]:rotate-90`}
            />
          </Menu.Button>
        </Tooltip.Trigger>
        <Tooltip.Content className={tooltipClass} placement={tooltipPlacement}>
          Settings
        </Tooltip.Content>
      </Tooltip.Root>
      <Menu.Content className={menuClass} placement={placement}>
        <CaptionsSubmenu />
      </Menu.Content>
    </Menu.Root>
  );
}

function CaptionsSubmenu() {
  const options = useCaptionOptions(),
    hint = options.selectedTrack?.label ?? "Off";

  return (
    <Menu.Root className="">
      <SubmenuButton
        label="Captions"
        hint={hint}
        disabled={options.disabled}
        icon={ClosedCaptionsIcon}
      />
      <Menu.Content className={submenuClass}>
        <Menu.RadioGroup className="w-full flex flex-col gap-1">
          {options.map(({ label, value, select }) => (
            <Radio value={value} onSelect={select} key={value}>
              {label}
            </Radio>
          ))}
        </Menu.RadioGroup>
      </Menu.Content>
    </Menu.Root>
  );
}

export interface RadioProps extends Menu.RadioProps {}

function Radio({ children, ...props }: RadioProps) {
  return (
    <Menu.Radio
      className="ring-media-focus group relative flex w-full cursor-pointer select-none items-center justify-start rounded-md p-2 outline-none data-[hocus]:bg-white/10 data-[focus]:ring-[3px]"
      {...props}
    >
      <RadioButtonIcon className="h-4 w-4 text-white group-data-[checked]:hidden" />
      <RadioButtonSelectedIcon className="text-media-brand hidden h-4 w-4 group-data-[checked]:block" />
      <span className="ml-2 min-w-36">{children}</span>
    </Menu.Radio>
  );
}

export interface SubmenuButtonProps {
  label: string;
  hint: string;
  disabled?: boolean;
  icon: React.FC<{ className?: string }>;
}

function SubmenuButton({
  label,
  hint,
  icon: Icon,
  disabled,
}: SubmenuButtonProps) {
  return (
    <Menu.Button
      className="ring-media-focus parent left-0 z-10 flex w-full cursor-pointer select-none items-center justify-start rounded-md bg-black/60 p-2.5 outline-none ring-inset data-[open]:sticky data-[open]:-top-2.5 data-[hocus]:bg-white/10 data-[focus]:ring-[3px] aria-disabled:hidden text-cyan-400"
      disabled={disabled}
    >
      <ChevronLeftIcon className="parent-data-[open]:block -ml-0.5 mr-1.5 hidden h-[18px] w-[18px]" />
      <div className="contents parent-data-[open]:hidden">
        <Icon className="w-5 h-5" />
      </div>
      <span className="ml-1.5 parent-data-[open]:ml-0">{label}</span>
      <span className="ml-1.5 text-sm text-white/80">{hint}</span>
      <ChevronRightIcon className="parent-data-[open]:hidden ml-0.5 h-[18px] w-[18px] text-sm text-white/50" />
    </Menu.Button>
  );
}
