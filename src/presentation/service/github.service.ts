import { GitHubStartPayload } from "../../interfaces";

export class GitHubService {
    constructor() { }

    onStart(payload: GitHubStartPayload): string {

        let message: string = '';
        const { action, sender, repository, starred_at } = payload;

        message = `User ${sender.login} ${action} star on ${repository.full_name}`;


        return message;

    }
}