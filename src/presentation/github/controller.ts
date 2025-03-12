import { Request, Response } from "express"
import { GitHubService } from "../service/github.service";

export class GithubController {

    constructor(
        private readonly githubService = new GitHubService(),
    ) { }

    webhookHandler = (req: Request, res: Response) => {

        const githubEvent = req.header('x-github-event') ?? 'Desconocido';
        const payload = req.body;
        let message: string;

        switch (githubEvent) {

            case 'star':
                message = this.githubService.onStart(payload);
                break;

            default:
                message = `Evento Desconocido ${githubEvent}`;
        }

        console.log({ message });

        res.status(201).send('Accepted')
    }
};