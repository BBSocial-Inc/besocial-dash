import Nav from "@/components/Nav";
import styles from "@/styles/Home.module.scss";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DashboardLayout() {
  return (
    <Tabs defaultValue="demo" className="w-full">
      <div className="bg-white">
        <Nav />

        <div className="relative isolate px-1 md:px-10 pt-20 md:pt-10 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-full py-5 sm:pt-40 lg:py-25">
            <div className="">
              <h1 className={styles.mainText}>Demo</h1>
              <p className={styles.subText}>
                See how Refir works with our <br />
                interactive demo or a youtube video
              </p>
              <div className={styles.btncon}>
                <TabsList className="grid w-[400px] grid-cols-2">
                  <TabsTrigger value="demo">Interactive</TabsTrigger>
                  <TabsTrigger value="youtube">Youtube</TabsTrigger>
                </TabsList>
              </div>
            </div>
          </div>

          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>

          <div className="px-1 md:px-10 h-fit">
            <div className="mt-[-90px] h-fit md:mt-10 px-2 md:px-5 bg-[#eeeeee94] py-2 md:py-5 rounded-xl md:rounded-3xl shadow-lg border border-[#dad9d9]">
              {/* <img
                src="/screenshot2.png"
                className="flex md:hidden rounded-0 md:rounded-2xl border border-[#dad9d9] "
              /> */}
              <TabsContent value="demo">
                <div
                  className="flex"
                  style={{
                    position: "relative",
                    paddingBottom: "calc(52.4375% + 44px)",
                    height: 0,
                  }}
                >
                  <iframe
                    src="https://app.supademo.com/embed/9003Vug0up_f_FEQ32VsL"
                    frameBorder="0"
                    allowFullScreen={true}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </div>
              </TabsContent>
              <TabsContent value="youtube">
                <div
                  className="flex"
                  style={{
                    position: "relative",
                    paddingBottom: "calc(52.4375% + 44px)",
                    height: 0,
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/O1OgP5nOLKo"
                    frameBorder="0"
                    allowFullScreen={true}
                    width="420"
                    height="345"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      borderRadius: 20,
                    }}
                  ></iframe>
                </div>
              </TabsContent>
            </div>
          </div>
        </div>
      </div>
    </Tabs>
  );
}
