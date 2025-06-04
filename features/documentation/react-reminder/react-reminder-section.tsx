import { CodeBlock } from "@/shared/components/reusable/code-block";

export default function ReactReminderSection() {
  return (
    <section className="max-w-4xl mx-auto space-y-12 text-gray-800 dark:text-gray-100">
      <details className=" p-4 space-y-2">
        <summary className="cursor-pointer text-lg font-semibold">
          React Server Components (RSC)
        </summary>
        <p>
          Les RSC ne sont pas du SSR. Ils permettent d’exécuter des composants
          React uniquement sur le serveur, sans jamais envoyer leur JavaScript
          au client.
        </p>
        <p>
          Le résultat est un <strong>JSON sérialisé</strong> qui décrit
          l’interface utilisateur (UI), pas des données brutes.
        </p>
        <p>
          Contrairement au modèle classique (API → données → UI), les RSC
          inversent le flux : le serveur envoie déjà une structure d’UI prête à
          être affichée.
        </p>
        <p>
          Ils permettent un rendu plus rapide, moins de JS côté client, et une
          meilleure séparation des responsabilités.
        </p>
        <div className="space-y-2">
          <h4 className="font-semibold">📦 Exemple 1 : Vue-Modèle d'un RSC</h4>
          <CodeBlock>
            {`async function LikeButtonViewModel({
  postId,
  includeAvatars
}) {
  const [post, friendLikes] = await Promise.all([ 
    getPost(postId),
    getFriendLikes(postId, { limit: includeAvatars ? 5 : 2 }),
  ]);
  
  return (
    <LikeButton
      totalLikeCount={post.totalLikeCount}
      isLikedByUser={post.isLikedByUser}
      friendLikes={friendLikes.likes.map(l => ({
        firstName: l.firstName,
        avatar: includeAvatars ? l.avatar : null,
      }))}
    />
  );
}`}
          </CodeBlock>
          <p>
            Ce code récupère des données depuis des appels API (`getPost` et
            `getFriendLikes`) et les transforme en un composant `LikeButton`
            prêt à être affiché, en envoyant un JSON avec les données
            nécessaires pour l'affichage du composant.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold">
            🔁 Exemple 2 : Sérialisation du JSON envoyé au Client
          </h4>
          <CodeBlock>
            {`{
  type: "LikeButton",
  props: {
    totalLikeCount: 8,
    isLikedByUser: false,
    friendLikes: [{
      firstName: 'Alice',
      avatar: 'https://example.com/alice.jpg'
    }, {
      firstName: 'Bob',
      avatar: 'https://example.com/bob.jpg'
    }]
  }
}`}
          </CodeBlock>
          <p>
            Ce JSON représente le résultat du rendu côté serveur. Il décrit les
            composants React nécessaires pour afficher l'UI, ici un composant
            `LikeButton` avec des données spécifiques telles que le nombre total
            de likes et la liste des amis ayant aimé le post.
          </p>
        </div>

        <p className="text-sm opacity-70">
          Voir :{" "}
          <a
            className="underline"
            href="https://overreacted.io/jsx-over-the-wire/"
            target="_blank"
            rel="noopener noreferrer"
          >
            JSX over the wire - Dan Abramov
          </a>
        </p>
      </details>
    </section>
  );
}
