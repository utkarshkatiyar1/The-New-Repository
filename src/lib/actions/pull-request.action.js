"use server";
// import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";
// import { currentUser } from '@clerk/nextjs/server';
import { auth } from '@clerk/nextjs/server';


export async function getPullRequests(
  username, repoName, pat
) {
  try {
    connectToDB();

    console.log("1111111111111111")

    const {userId} = auth();
    if(!userId) return;


    const res = await fetch(`https://api.github.com/repos/${username}/${repoName}/pulls`, {
        headers: {
        Authorization: `token ${pat}`,
        },
    });

    console.log("222222222222222222222")

    // if (!res.ok) {
    //     return { props: { error: 'Failed to fetch pull requests' } };
    // }

    const pullRequests = await res.json();
    return pullRequests

  } catch (error) {
    throw new Error(`Error getting pull requests: ${error.message}`);
  }
}


export const getWorkflowRuns = async (username, repoName, pat) => {
    try {
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}/actions/runs`, {
            headers: {
                'Authorization': `token ${pat}`
            }
        });
    
        // if (!response.ok) {
        //     throw new Error(`HTTP error! status: ${response.status}`);
        // }
    
        const data = await response.json();
        return data;
        
    } catch (error) {
        throw new Error(`Error getting workflow runs: ${error.message}`);
        
    }
    
};

export const getWorkflowRunsForPR = async (username, repoName, pat, pullNumber) => {
    try {
        // Fetch the pull request details to get the commit SHA
        const prResponse = await fetch(`https://api.github.com/repos/${username}/${repoName}/pulls/${pullNumber}`, {
            headers: {
                'Authorization': `token ${pat}`
            }
        });



        
        const prData = await prResponse.json();
  
        const commitSHA = prData.head.sha;
        console.log(`sha is : ${commitSHA}`)

        // Fetch all workflow runs
        const workflowRuns = await getWorkflowRuns(username, repoName, pat);
        console.log(`workflowRuns is : ${workflowRuns}`)

        // return workflowRuns

     



        // Filter workflow runs by the commit SHA
        const filteredRuns = workflowRuns.workflow_runs.filter(run => run.head_sha === commitSHA);
        console.log(filteredRuns)
//8f77e40fb3bce4f577ed5241a0413c091c0c4c47
        // console.log('Workflow Runs for Pull Request:', filteredRuns);
        return filteredRuns;
    } catch (error) {
        console.error('Error fetching workflow runs for PR:', error);
    }
};


export default async function getPullsbySha(username, repoName, pat, pullNumber) {

  
    try {

        const prResponse = await fetch(`https://api.github.com/repos/${username}/${repoName}/pulls/${pullNumber}`, {
            headers: {
                'Authorization': `token ${pat}`
            }
        });



        
        const prData = await prResponse.json();
  
        const commitSHA = prData.head.sha

      const response = await fetch(`https://api.github.com/repos/${username}/${repoName}/actions/runs?head_sha=${commitSHA}`, {
        headers: {
          'Authorization': `token ${pat}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });
  
      const data = await response.json();
      return data
    } catch (error) {
        throw new Error(`Error getting workflow runs: ${error.message}`);
    }
  }
// // Example usage
// fetchWorkflowRunsForPR('username', 'repo', 1, 'your_github_token');


// export async function getAllRepoGroupByGithubUsername(githubUsername) {
//   try {
//     connectToDB();

//     const {userId} = auth();
//     if(!userId) return;

//     const allRepoGroup = await RepoGroup.find({githubUsername: githubUsername})

//     return allRepoGroup;

//   } catch (error) {
//     throw new Error(`Error getting all Github accounts by clerkID: ${error.message}`);
//   }
// }