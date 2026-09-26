import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
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

export class Xatu_59 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Natu";
  public hp: number = 100;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Clairvoyant Sense", powerType: PowerType.ABILITY, text: "Once during your turn, you may attach a Basic Psychic Energy card from your hand to 1 of your Benched Pokémon. If you attached Energy to a Pokémon in this way, draw 2 cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Super Psy Bolt", cost: [], damage: "80", text: "" }
  ];
  public set: string = "PR-SV";
  public name: string = "Xatu";
  public fullName: string = "Xatu PR-SV 59";
  public text: string = "Xatu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 2);
    }
    return state;
  }
}
