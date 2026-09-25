import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamAquaSCrawdaunt_2 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Aqua's Corphish";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Aqua Reverse", cost: [], damage: "20", text: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon that has Team Magma in its name and switch it with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch." },
      { name: "Deep Impact", cost: [], damage: "40", text: "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Confused." }
  ];
  public set: string = "MA";
  public name: string = "Team Aqua's Crawdaunt";
  public fullName: string = "Team Aqua's Crawdaunt MA 2";
  public text: string = "Team Aqua's Crawdaunt";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
