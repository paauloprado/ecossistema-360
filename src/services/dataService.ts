export async function loadAndProcessAll() {
 

      const [examsResp, reportsResp] = await Promise.all([
        fetch('/data/jpr_units.json'),
        fetch('/data/reports_with_state.json'),
      ]);

      const [examJson, reportJson] = await Promise.all([
        examsResp.json(),
        reportsResp.json(),
      ]);

      // console.log('examJson', examJson);

      // const processedUsers = usersJson.map((user: any) => ({
      //   id: user.id,
      //   name: user.name,
      // }));

      // const processedProducts = productsJson.map((product: any) => ({
      //   id: product.id,
      //   title: product.title,
      // }));

      // return {
      //   users: processedUsers,
      //   products: processedProducts,
      // };
      return {
        exams: examJson,
        reports: reportJson,
      };
    }
