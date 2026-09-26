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
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ThundurusEXBW81 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Raiden Knuckle", cost: [], damage: "30", text: "Attach an Energy card from your discard pile to 1 of your Benched Team Plasma Pokémon." },
      { name: "Thunderous Noise", cost: [], damage: "90", text: "If this Pokémon has any Plasma Energy attached to it, discard an Energy attached to the Defending Pokémon." }
  ];
  public set: string = "PR-BLW";
  public name: string = "Thundurus-EX";
  public fullName: string = "Thundurus-EX PR-BLW BW81";
  public text: string = "Thundurus-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
