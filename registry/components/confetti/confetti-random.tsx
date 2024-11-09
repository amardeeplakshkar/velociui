import { ConfettiButton } from "@/components/core/confetti";

export default function ConfettiButtonDemo() {
  return (
    <div className="relative h-full w-full flex justify-center items-center">
      <ConfettiButton
        options={{
          get angle() {
            return Math.random() * 360;
          },
        }}
      >
        Random Confetti 🎉
      </ConfettiButton>
    </div>
  );
}
