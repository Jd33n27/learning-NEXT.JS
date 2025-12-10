import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CardProp {
  className?: string;
}

const CardExample = ({ className }: CardProp) => {
  return (
    <>
      <Card className={`${className} max-w-sm w-full`}>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>
            <Button variant={"destructive"}>CTA Button</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p>
            Everything that goes into the center content area goes here,
            typically for the main information.
          </p>
        </CardContent>
        <CardFooter>
          <p>Card Footer with small print or date.</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardExample;
