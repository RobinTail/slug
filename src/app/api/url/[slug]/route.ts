import { z } from "zod";
import { prisma } from "@/server/db";

const routeContextSchema = z.object({
  params: z.object({
    slug: z.string(),
  }),
});

// [GET] Get URL data.
// ---------------------------------------
export async function GET(
  _req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    // Validate route params.
    const { params } = routeContextSchema.parse(context);

    const data = await prisma.link.findUnique({
      where: {
        slug: params.slug,
      },
    });

    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify({ error: error || "Unknown error" }), {
      status: 500,
    });
  }
}
