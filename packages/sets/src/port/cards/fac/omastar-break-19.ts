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

export class OmastarBREAK_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Omastar";
  public hp: number = 140;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dangerous Tentacle", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may switch 1 of your opponent's Benched Pokémon-EX with his or her Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [];
  public set: string = "FAC";
  public name: string = "Omastar BREAK";
  public fullName: string = "Omastar BREAK FAC 19";
  public text: string = "Omastar BREAK";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.switchSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
