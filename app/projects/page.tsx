import { getWixClient } from '@app/hooks/useWixClientServer';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';
import { ProjectsData } from '@statics/local-data';

export default async function Projects() {
  const wixClient = await getWixClient();
  const { items } = await wixClient.items
    .queryDataItems({
      dataCollectionId: 'Our-Projects',
    })
    .find(); 
    // console.log("items from wix: ", items)
  return (
    <div className="relative">
      <div className="w-full h-[400px] relative">
        <WixMediaImage
          media="/images/1385296.jpg"
          alt="projects"
          sizes="100vw"
          objectFit="cover"
          disableZoom={true}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
        <h1
          className="text-center py-8 font-site"
          data-testid={testIds.PROJECTS_PAGE.HEADER}
        >
          Our Solutions
        </h1>
        <p className="pt-6 max-w-3xl text-sm text-center mx-auto">
          At LearnedTech, we are always working on projects to improve the
          quality and accessibility of education for everyone. Take a look at
          some of our current and past projects.
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 grid-flow-row mt-10"
          data-testid={testIds.PROJECTS_PAGE.PROJECT_LIST}
        >
          {ProjectsData!.map((item) => (
            <div
              key={item._id}
              className="p-4 relative"
              data-testid={testIds.PROJECTS_PAGE.PROJECT_ITEM_CONTAINER}
            >
              <div className="sm:w-[370px] h-[320px] relative">
                <WixMediaImage
                  media={item.data!.cover}
                  alt={item.data!.title}
                  objectFit="cover"
                />
              </div>
              <div className="bg-white sm:mt-[-50px] border-t-4 relative mx-6 px-2 pt-3 border-blue-site text-center">
                <h2 className="mb-10 font-site">{item.data!.title}</h2>
                <p className="text-sm mb-6">{item.data!.short_description}</p>
                <a
                  data-testid={testIds.PROJECTS_PAGE.PROJECT_ITEM_CTA}
                  href={`/projects/${item.data!.slug}`}
                  className="text-purple-site py-6 font-site"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
