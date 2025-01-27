import { Navbar } from "@/components/navbar/navbar";

export default function Layout(props:any) {
    const children = props.children;
    return (
  <>
            <div>
            <Navbar/>
            {children}
            </div>       
  </>
      );
    }