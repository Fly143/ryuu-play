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

export class PikachuVUNIONSWSH140 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 300;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Union Gain", cost: [], damage: "", text: "Attach up to 2 Lightning Energy cards from your discard pile to this Pokémon." },
      { name: "Shocking Shock", cost: [], damage: "120", text: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed." },
      { name: "Disconnect", cost: [], damage: "150", text: "During your opponent's next turn, they can't play any Item cards from their hand." },
      { name: "Electro Ball Together", cost: [], damage: "250", text: "" }
  ];
  public set: string = "PR-SW";
  public name: string = "Pikachu V-UNION";
  public fullName: string = "Pikachu V-UNION PR-SW SWSH140";
  public text: string = "Pikachu V-UNION";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    return state;
  }
}
